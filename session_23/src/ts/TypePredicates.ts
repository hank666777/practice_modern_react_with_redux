interface Img {
  src: string;
}

interface User {
  username: string;
}

function isUser(value: User| Img): value is User {
  return 'username' in value;
}