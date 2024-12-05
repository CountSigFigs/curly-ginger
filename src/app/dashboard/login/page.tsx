import Input from "@/components/Input";
import Label from "@/components/Label";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 m-8">
      <h2 className="font-bold text-2xl">Login</h2>
      <form className="max-w-96">
        <div className="flex flex-col gap-2 mb-3">
          <Label htmlFor="username">Email</Label>
          <Input type="text" name="email" id="email"/>
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <Label htmlFor="password">Password</Label>
          <Input type="text" name="password" id="password"/>
        </div>
      </form>
    </div>
  );
}
