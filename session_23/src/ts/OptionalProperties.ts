interface UserProfile {
  likes: string[];
}

interface User {
  id: string;
  username: string;
  // optional
  profile?: UserProfile;
}

const user: User = {
  id: 'abc',
  username: 'me',
  profile: {
    likes: ['cats']
  }
}

user.profile?.likes