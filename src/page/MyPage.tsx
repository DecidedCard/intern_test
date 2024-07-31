import { ChangeEvent, useEffect, useState } from "react";
import useUserStore from "../share/store/useUserStore";
import { useProfileChangeMutation } from "../hook/useMutation";

const MyPage = () => {
  const { user } = useUserStore();

  const [nickname, setNickname] = useState("");
  const [changeProfileImage, setChangeProfileImage] = useState("");
  const [avatar, setAvatar] = useState<File[]>([]);

  const { profileChangeMutation } = useProfileChangeMutation();

  useEffect(() => {
    if (user?.nickname) {
      setNickname(user?.nickname);
    }
  }, [user]);

  const onChangeNicknameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onChangeFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const size = 1024 * 1024;

    if (file.size > size) {
      alert("파일첨부 사이즈는 1MB 이내로 가능합니다.");
      return;
    }

    setAvatar([file]);
    const url = URL.createObjectURL(e.target.files![0]);
    setChangeProfileImage(url);
  };

  const onClickProfileChangeHandler = () => {
    const formData = new FormData();
    if (avatar) {
      formData.append("avatar", avatar[0]);
    }
    if (nickname) {
      formData.append("nickname", nickname);
    }

    profileChangeMutation({
      token: localStorage.getItem("token")!,
      profileInput: formData,
    });
  };

  return (
    <main className="flex flex-col justify-center items-center gap-4 h-96">
      <div className="flex gap-16">
        <section className="flex flex-col items-center gap-3">
          <h2>프로필</h2>
          {user?.avatar ? (
            <img
              src={user?.avatar}
              alt="유저 아바타"
              className="w-36 h-36 rounded-lg"
            />
          ) : (
            <div className="w-36 h-36 rounded-lg bg-gray-300" />
          )}
          <p>{user?.nickname}</p>
        </section>

        <section className="flex flex-col items-center gap-3">
          <h2>프로필 변경하기</h2>
          <label htmlFor="avatar" className="cursor-pointer">
            {changeProfileImage.length !== 0 ? (
              <img
                src={changeProfileImage}
                alt="유저 아바타"
                className="w-36 h-36 rounded-lg"
              />
            ) : (
              <div className="w-36 h-36 rounded-lg bg-gray-300" />
            )}
          </label>
          <input
            id="avatar"
            type="file"
            accept="image/*"
            onChange={onChangeFileHandler}
            className="hidden"
          />
          <input
            type="text"
            value={nickname}
            onChange={onChangeNicknameHandler}
            className="p-1 w-36 border border-solid border-black"
          />
        </section>
      </div>
      <button type="button" onClick={onClickProfileChangeHandler}>
        변경하기
      </button>
    </main>
  );
};

export default MyPage;
