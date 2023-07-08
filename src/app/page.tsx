'use client'
import Counter from '@/components/Counter';
import Login from '@/components/Login'
import { useAppSelector } from '@/redux/store'



export default function Home(){
  const username = useAppSelector((state) => state.authReducer.value.username);
  const isModerator = useAppSelector(
    (state) => state.authReducer.value.isModerator
  );
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);


 

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {isAuth && <Counter />}
        <br />
        <Login />
        <br />
        <h1>Username: {username}</h1>
        {isModerator && <h1>This user is Moderator</h1>}
      </main>
    </>
  );
}
