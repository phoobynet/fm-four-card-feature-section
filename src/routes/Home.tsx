import styles from './Home.module.scss'
import iconCalculator from '@/assets/images/icon-calculator.svg'
import iconKarma from '@/assets/images/icon-karma.svg'
import iconSupervisor from '@/assets/images/icon-supervisor.svg'
import iconTeamBuilder from '@/assets/images/icon-team-builder.svg'
import Card from '@/components/Card'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <header>
          <h1>
            Reliable, efficient delivery<strong>Powered by Technology</strong>
          </h1>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </header>
        <main>
          <Card
            title={'Supervisor'}
            content={'Monitors activity to identify project roadblocks'}
            imageUrl={iconSupervisor}
            accentClass={styles.supervisor}
          />

          <Card
            title={'Team Builder'}
            content={
              'Scans our talent network to create the optimal team for your project'
            }
            imageUrl={iconTeamBuilder}
            accentClass={styles.teamBuilder}
          />

          <Card
            title={'Karma'}
            content={'Regularly evaluates our talent to ensure quality'}
            imageUrl={iconKarma}
            accentClass={styles.karma}
          />

          <Card
            title={'Calculator'}
            content={
              'Uses data from past projects to provide better delivery estimates'
            }
            imageUrl={iconCalculator}
            accentClass={styles.calculator}
          />
        </main>
      </div>
    </div>
  )
}
