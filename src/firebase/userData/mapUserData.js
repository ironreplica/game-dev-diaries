export default function mapUserData(user) {
  const { uid, email, xa, displayName, photoUrl } = user;
  return {
    id: uid,
    email,
    token: xa,
    name: displayName,
    profilePic: photoUrl,
  };
}
