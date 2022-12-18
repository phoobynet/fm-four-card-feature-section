import styles from './Card.module.scss'

interface Props {
  title: string
  content: string
  imageUrl: string
  accentClass: string
}

export default function Card({ title, content, imageUrl, accentClass }: Props) {
  return (
    <div className={styles.card}>
      <div className={accentClass}></div>
      <h2>{title}</h2>
      <p>{content}</p>
      <img
        src={imageUrl}
        alt=""
      />
    </div>
  )
}
