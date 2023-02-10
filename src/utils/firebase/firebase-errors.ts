export const friendlyFirebaseError = (errorCode: string) => {
  switch (errorCode) {
    case "auth/email-already-in-use":
      return "Email address in use";
    case "auth/invalid-email":
      return "Enter a valid email address";
    case "auth/invalid-password":
      return "Password must be at least 6 characters in length";
    default:
      return "Something went wrong";
  }
};
