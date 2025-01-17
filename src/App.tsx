import { useCallback, useEffect } from 'react'

import PrivateRoute from './routes/privateRoute';
import { useFillData } from './Hooks/useFilldata';
import { useAuth } from './api/Controller/seguridad/authController';
import LoginRoute from './routes/loginRoutes';

interface IDataApp {
  isLeido: boolean
  isLogin: boolean
}

const DataApp: IDataApp = {
  isLeido: false,
  isLogin: true
}

function App() {
  const auth = useAuth()
  const data = useFillData<IDataApp>(DataApp)
  //custompage-layout  custom-classes add and removing 

  // useEffect(() => {
  //   document.querySelector("body")?.classList.remove("bg-primary-transparent", "error-page1", "error-2", "landing-page", "horizontalmenu");
  //   document.querySelector("body")?.classList.add("main-body");
  // }, []);

  const renderGetInfo = useCallback(async () => {
    try {
      const Inicio = auth.getLogin()
      if (Inicio && Inicio.status === 200 && Inicio.success) {
        data.updateData(false, 'isLogin')
      }
    } catch (e) {
      auth.removeLogin()
      //    data.updateData(true, 'isLogin')
    }
    finally {
      data.updateData(true, 'isLeido')
    }
  }, [])

  useEffect(() => {
    renderGetInfo()
  }, [renderGetInfo]);

  return data.data.isLeido && (
    <>
      {data.data.isLogin ? (
        <>
          < LoginRoute />
        </>
      ) : (
        <>
          <PrivateRoute />
        </>
      )}
    </>
  )
}

export default App;