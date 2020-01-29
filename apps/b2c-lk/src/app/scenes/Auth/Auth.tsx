import React from 'react'
import { useSelector } from 'react-redux'
import { IStore } from '../../store'

const Auth = () => {
    const {mock} = useSelector((state: IStore) => state.transport);

    const message = mock && mock.message;

    return (
        <div>
            Auth component works! {message && (
                <>
                    Message - {message}
                </>
            )}
        </div>
    )
}

export default Auth
