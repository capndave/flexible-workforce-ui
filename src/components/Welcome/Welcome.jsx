import UserCircle from '@iconscout/react-unicons/icons/uil-user-circle'

export function Welcome({ userName }) {
    return (
        <div>
          <UserCircle size='100'/>
          <h2>Welcome {userName}!</h2>
        </div>
    )
}