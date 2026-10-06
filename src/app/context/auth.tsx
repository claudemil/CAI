import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { db } from "../../../firebaseConfig";

interface AuthContextType {
  login: (username: string, password: any) => void;
  register: (
    username: string,
    password: any,
    confirmPassword: any,
    email: string,
  ) => void;
  logout: () => void;
  user: any;
  appUser: AppUser | null;
  isLoading: boolean;
}

interface AppUser {
  username: string;
  email: string;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [appUser, setAppUser] = useState<AppUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(null);
      setIsLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  const login = async (username: string, password: any) => {
    //since i wanted to login using username
    // have to find the user using username first
    const usersRef = collection(db, "users");

    const q = query(usersRef, where("username", "==", username));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      Alert.alert("Error", "Username not found");
      return;
    }

    //get the first document xd
    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();
    const userEmail = userData.email; //sign in using the email lmaoooo
    setAppUser({
      username: userData.username,
      email: userData.email,
    });
    Alert.alert("Success", "Logged in successfully!");

    return signInWithEmailAndPassword(auth, userEmail, password);
  };

  const register = async (
    username: string,
    password: any,
    confirmPassword: any,
    email: string,
  ) => {
    if (!username || !password || !confirmPassword || !email) {
      Alert.alert("Error", "Please fill in all fields!");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = userCred.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        username: username,
        email: email,
        createdAt: new Date().toISOString(),
      });
      setAppUser({
        username: username,
        email: email,
      });
    } catch (e: any) {
      let errorMessage = "Registration failed!";

      if (e.code === "auth/email-already-in-use") {
        errorMessage = "That email address is already in use!";
      } else if (e.code === "auth/invalid-email") {
        errorMessage = "That email address is invalid!";
      } else if (e.code === "auth/weak-password") {
        errorMessage = "Password should be at least 6 characters.";
      } else if (e.message) {
        errorMessage = e.message;
      }

      Alert.alert("Error", errorMessage);
    }
  };

  const logout = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          try {
            await signOut(auth);
          } catch (e) {
            Alert.alert("Error", "Could not log out. Please try again.");
          }
        },
      },
    ]);
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, login, register, logout, appUser }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
  //   return useContext(AuthContext);
};

export default useAuth;
