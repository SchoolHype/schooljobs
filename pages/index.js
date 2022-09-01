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
        <title>School Competitions</title>
        <meta name="description" content="Competitions made easy for schools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Competitions made easy for schools</h1>
          <h2>Just register yourself and we&apos;ll handle everything else</h2>
          <h2 className={styles.mainText}>COMING SOON</h2>
          <h2>All school competitions at one place!</h2>
          <p>
            School, District, State, Zonal or National Level <br/>
            100s of competitions to choose from
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
