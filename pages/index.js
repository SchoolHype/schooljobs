import Head from 'next/head'
import { useState } from 'react'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import styles from '../styles/Home.module.css'

import {toast} from 'react-toastify'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {database} from '../services/firebase'


export default function Home() {

  const [email, setEmail] = useState('')

  const addQuery = () => {
    toast.promise(
      addDoc(collection(database,'schooljobsqueries'), {
          email: email,
          message: 'Coming Soon Enquiry',
          time: serverTimestamp()
      }), 
      {
        pending: 'Adding details to support queue',
        success: 'Added details to support queue',
        error: 'An error occured while adding details to support queue Please try again later or contact us directly'
      }
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>School Jobs</title>
        <meta name="description" content="Schools get best people | Employees get best jobs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>schooljobs.online</h1>
          <h2 className={styles.mainText}>COMING SOON</h2>
          <h2>Welcome to schooljobs.online.</h2>
          <p>
            Schools get best people <br /> Employees get best jobs
          </p>

          <div className={styles.notifyInput}>
            <TextInput placeholder={"Enter your email address"} value={email} onChange={e => setEmail(e.target.value)} name="email" />
            <Button onClick={addQuery}>Notify</Button>
          </div>

        </div>
      </main>
    </div>
  )
}
