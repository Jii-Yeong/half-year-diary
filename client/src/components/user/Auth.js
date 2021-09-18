// 테스트용 인증 모듈
const users = [
  {
    id: "kim@test.com",
    password: "123",
    nickname: "김미영",
    profile: "https://picsum.photos/50/50/?image=50",
  },
  {
    id: "lee@test.com",
    password: "456",
    nickname: "이철수",
    profile: "https://picsum.photos/50/50/?image=50",
  },
  {
    id: "hong@test.com",
    password: "789",
    nickname: "홍길동",
    profile: "https://picsum.photos/50/50/?image=50",
  },
];

export function auth({ id, password }) {
  const user = users.find(
    (user) => user.id === id && user.password === password
  );

  if (user === undefined) throw new Error();

  return user;
}
