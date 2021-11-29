import s from "./ProfileUser.module.css";

const ProfileUser = () => {
  return (
    <>
      <div className={s.bg_top}></div>
      <img className={s.avatar} src="https://a.d-cd.net/7f09b9s-480.jpg"></img>
      <div className={s.about_user}>
        <h1 className={s.title}>Sergey Spitsa</h1>
        <p>Date of birthday: 18 july </p>
        <p>City: Zaporizhzhia </p>
        <p>Education: ZNTU </p>
        <p>Web-site: https://kinopoisk.ru </p>
      </div>
    </>
  );
};

export default ProfileUser;
