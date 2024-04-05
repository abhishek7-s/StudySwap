import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/layout/Layout'

function NoPage() {
  return (
    <Layout>
      <div className="flex flex-col min-h-[100vh] items-center justify-center space-y-4 px-4 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Uh oh! You're lost.</h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          It looks like you're trying to access a page that doesn't exist. Let's get you back to the app.
        </p>
      </div>
      <Link
        to={'/'}
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
      >
        Go to the Home Page
      </Link>
    </div>
    </Layout>
  )
}

export default NoPage
