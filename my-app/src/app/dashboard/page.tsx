import { Suspense } from 'react'
// import { PostFeed, Weather } from './Components'

export default function Posts() {
  return (
    <section>
      <h2>Hello Dashboard page</h2>
      <Suspense fallback={<p>Loading feed...</p>}>
        {/* <PostFeed /> */}
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>First Post</td>
              <td>This is a summary of the first post.</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>Second Post</td>
              <td>This is a summary of the second post.</td>
            </tr>
          </tbody>
        </table>
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        {/* <Weather /> */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/sunny.png" alt="Sunny weather" style={{ width: '100px', marginRight: '20px' }} />
          <div>
            <h3>Weather Information</h3>
            <p>Location: San Francisco</p>
            <p>Temperature: 20°C</p>
            <p>Condition: Sunny</p>
          </div>
        </div>
      </Suspense>
    </section>
  )
}