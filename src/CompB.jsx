import React from 'react'

function CompB({name,lastname,email,IsConnected}) {
  return (
    <div>
        name: {name},
        lastname: {lastname}, 
        email: {email},
        IsConnected: {IsConnected == true ? 'Esta Conectado' : 'Esta desconectado'}

    </div>
  )
}

export default CompB