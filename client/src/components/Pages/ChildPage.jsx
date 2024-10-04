import { useEffect, useState } from 'react';
import AuthService from '../../utils/utils'
import { retrieveChildByIdByEmail } from '../../api/API';


export default function ChildPage() {
  const [childData, setChildData] = useState({})

  useEffect(() => {
    // Get profile info (email)
    const profile = AuthService.getProfile()
    // Use email to get parent info and save it in parentData
    const getChildInfo = async() => {
      const childInfo = await retrieveChildByIdByEmail(profile.email)
      setChildData(childInfo)
      console.log(childInfo);      
     }
     getChildInfo()
  },[])

  return (
    <div>
      Childpage
    </div>
  )
}
