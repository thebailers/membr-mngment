export const friendlyFirebaseError = (errorCode: string) => {
  switch (errorCode) {
    case "auth/email-already-in-use":
      return "Email address in use";
    default:
      return "Something went wrong";
  }
};
