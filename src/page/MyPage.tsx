import useUserStore from "../share/store/useUserStore";

const MyPage = () => {
  const { user } = useUserStore();

  console.log(user);
  return (
    <main>
      <h2>프로필</h2>
      <div>
        <p>사진 변경하기</p>
        <label htmlFor="avatar">변경하기</label>
        <input id="avatar" type="file" className="hidden" />
      </div>
    </main>
  );
};

export default MyPage;
