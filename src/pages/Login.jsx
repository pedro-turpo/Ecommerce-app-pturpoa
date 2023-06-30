import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { loginUser, logout } from "../store/slices/userInfo.slice"

const Login = () => {

    const { token, user } = useSelector((store) => store.userInfo)

    const dispatch = useDispatch()

    const { register, handleSubmit } = useForm()

    const submit = (dataForm) => {
        dispatch(loginUser(dataForm))
    }

    const handleClickLogout = () => {
        dispatch(logout())
    }


    return (
        <section className="grid place-content-center px-2 border mt-[70px] min-h-screen">

            {
                token ? (
                    <section className="bg-white rounded-xl p-4 w-[300px] grid gap-6 border shadow-2xl">
                        <i className="bx bxs-user-circle text-center text-6xl "></i>
                        <span className="text-center font-bold">{user.firstName} {user.lastName}</span>
                        <button onClick={handleClickLogout} className="block w-full py-2 bg-[#F85555] text-white hover:bg-red-600 transition-color rounded-lg">logout</button>
                    </section>
                ) : (
                    <form onSubmit={handleSubmit(submit)} className="bg-white rounded-xl p-4 max-w-[350px] grid gap-6 border shadow-2xl">
                        <h3 className="font-medium text-xl text-center">Welcome! Enter your email and password to continue</h3>

                        <section className="bg-[#D8F5FD] py-2 px-4 rounded-md">
                            <h5 className="text-center font-bold mb-4">test data</h5>
                            <div className="flex items-center gap-2">
                                <i className='bx bxs-envelope'></i>
                                <span>john@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className='bx bx-lock-alt'></i>
                                <span>john1234</span>
                            </div>
                        </section>

                        <div className="grid gap-2">
                            <label className="text-sm" htmlFor="email">Email</label>
                            <input className="border-[1px] border-gray-300 outline-none p-2 rounded-sm" id="email" type="email" {...register("email")} />
                        </div>

                        <div className="grid gap-2">
                            <label className="text-sm" htmlFor="password">Password</label>
                            <input className="border-[1px] border-gray-300 outline-none p-2 rounded-sm" id="password" type="password" {...register("password")} />
                        </div>

                        <button className="block w-full py-2 bg-[#F85555] text-white hover:bg-red-600 transition-colors">Login</button>

                        <p className="text-sm">Don't have an account? <span className="cursor-pointer text-xs text-blue-400">Sign up</span></p>
                    </form>
                )
            }



        </section>
    )
}
export default Login