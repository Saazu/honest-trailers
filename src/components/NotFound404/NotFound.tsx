import Button from '../Button/Button'
import styles from './NotFound.module.css'
import { useHistory } from 'react-router-dom'

const NotFound404 = () => {
  const { push } = useHistory()

  return (
    <section className={styles.container}>
      <h1 className={styles.errorNumber}>404</h1>
      <h2>404 Sorry! The page you are looking for cannot be found. 😢</h2>
      <Button onClick={() => push('/share-feedback')}>
        Back to Share Feedback
      </Button>
    </section>
  )
}

export default NotFound404
