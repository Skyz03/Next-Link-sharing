import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Link } from "next/link";

export default function LoginForm() {
  return (
    <Card
      title="Login"
      subTitle="Add your details below to get back into the app"
      className="p-m-4 mt-10"
    >
      <div className="flex flex-col gap-4">
        <div className="p-field flex flex-col gap-4">
          <label htmlFor="email">Email address</label>
          <InputText
            className="border border-amber-300"
            id="email"
            type="email"
          />
        </div>
        <div className="p-field mt-4 flex flex-col gap-4">
          <label htmlFor="password">Password</label>
          <InputText
            className="border border-red-500"
            id="password"
            type="password"
          />
        </div>
        <Button
          label="Login"
          icon="pi pi-sign-in"
          className="p-4 w-full bg-primary rounded-md"
        />
        <div className="p-mt-3 flex flex-col gap-2 items-center">
          <a>Don't have an account?</a>
          <a>Create account</a>
          {/* <Link to="/forgot-password">Forgot Password?</Link> */}
          {/* <Link to="/signup">Sign Up</Link> */}
        </div>
      </div>
    </Card>
  );
}
