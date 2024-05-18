import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Dropdown, Label, TextInput, Button } from "flowbite-react"
import { useForm } from "react-hook-form";
import axios from "axios";

export default function User() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: 'onChange' });
  const { user, setUser } = useContext(AppContext);

  function handleClick() {
    alert("You have logged off!");
    setUser({id:"", email:"", password:""});
  }

  function submitData(data) {
    axios.post("http://127.0.0.1:3333/user/login", {
      email: data.email,
      password: data.password,
    })
    .then((res) => setUser(res.data))
    .catch((error) => alert(error.response.data.message));
  }

  return (
    <Dropdown 
      label={user.email ? 'Logout' : 'Login'} 
      inline 
      className="px-4 m-2"
      theme={{
        inlineWrapper: 'flex items-center py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-xl'
      }}
      >
      <Dropdown.Header>
        <span className="block truncate text-sm font-medium">{user.email ? user.email : 'Login'}</span>
      </Dropdown.Header>
      { user.id ? 
        <Dropdown.Item onClick={handleClick}>Sign out</Dropdown.Item> :
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit(submitData)}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput 
              id="email"
              type="email"
              onKeyDown={(e) => e.stopPropagation()}
              required
              {...register('email', {
                required: 'You must inform your admin email to login',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput 
              id="password" 
              type="password"
              onKeyDown={(e) => e.stopPropagation()}
              required 
              {...register('password', {
                required: 'Password required'
              })}/>
          </div>
          <Button type="submit">Sign in</Button>
        </form>
      }
    </Dropdown>
  );
}
  