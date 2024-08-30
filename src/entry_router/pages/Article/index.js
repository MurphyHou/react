import { useParams } from 'react-router-dom'
const Article = () => {
  /* const [params] = useSearchParams() */
  /* const id = params.get('id') */
  /* const name = params.get('name') */
  const { id, name } = useParams()

  return (
    <div>
      Article 页{id}-{name}
    </div>
  )
}
export default Article
