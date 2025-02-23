import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChangeEvent, useState } from 'react';

const Login = () => {
    const [email,setEmail]=useState("");
    const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setEmail(event.target.value);
    }
  return (
    <div className=''>
        <div className='grid grid-cols-4'>
            <div className='border p-4'>
            <div>
                <Label>Email</Label>
                <Input value={email} onChange={handleChange}/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login