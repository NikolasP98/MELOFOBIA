import firebase from "./firebase";

export const dbUserPublic = "user_public";
export const dbUserPrivate = "user_private";
export const dbUserPost = "user_post";
export const dbUserRole = "user_role";
export const dbPost = "post";

export const dbUserPublicRef = firebase.firestore().collection(dbUserPublic);
export const dbUserPrivateRef = firebase.firestore().collection(dbUserPrivate);
export const dbUserPostRef = firebase.firestore().collection(dbUserPost);
export const dbUserRoleRef = firebase.firestore().collection(dbUserRole);
export const dbPostRef = firebase.firestore().collection(dbPost);

export const auth = firebase.auth();
export const authUser = () => auth.currentUser;
export const userID = () => authUser?.userID;