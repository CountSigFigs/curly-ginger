
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { validateSiteEntry } from "./action";

export default function Home() {

  async function submitHandler(formData: FormData) {
    'use server'
 
    const passcode = formData.get('passcode') as string;

    await validateSiteEntry(passcode);
  }

  return (
    <div className="flex flex-col gap-6 m-8">
      <p>Site Under Construction</p>
      <form className="flex flex-col max-w-64" action={submitHandler}>
        <Label htmlFor="passcode">Passcode</Label>
        <Input type="text" name="passcode" id="passcode"></Input>
        <div className="my-2">
          <Button>Preview</Button>
        </div>
      </form>
    </div>
  );
}
