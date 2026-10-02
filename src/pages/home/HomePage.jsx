import ProgressBanner from '../../components/home/ProgressBanner'
import KnowledgeCard from '../../components/home/KnowledgeCard'
import ChallengePreview from '../../components/home/ChallengePreview'

import '../../components/home/home.css'

function HomePage({ onNavigate }) {
  return (
    <section className="home-page">
      <header className="page-header">
        <div>
          <span className="eyebrow">DÉCOUVERTE</span>

          <h1>
            Découvrez quelque chose
            <br />
            <span>de nouveau.</span>
          </h1>

          <p>
            Apprenez, testez vos connaissances et découvrez
            des contenus créés par la communauté.
          </p>
        </div>
      </header>

      <ProgressBanner />

      <div className="section-heading">
        <div>
          <span className="eyebrow">POUR VOUS</span>
          <h2>À découvrir maintenant</h2>
        </div>

        <button
          type="button"
          className="text-button"
          onClick={() => onNavigate('explore')}
        >
          Tout voir →
        </button>
      </div>

      <div className="content-grid">
        <KnowledgeCard
          category="HISTOIRE"
          title="Pourquoi certaines civilisations ont-elles disparu ?"
          description="Découvrez les facteurs politiques, économiques, environnementaux et sociaux qui ont contribué à la disparition de plusieurs grandes civilisations."
          creatorInitial="A"
          creatorName="Alex M."
          creatorRole="Passionné d'histoire"
          views="2,4k"
          likes="184"
          onDiscover={() => onNavigate('challenges')}
        />

        <KnowledgeCard
          category="TECHNOLOGIE"
          title="Comment fonctionne réellement Internet ?"
          description="De votre téléphone jusqu'au serveur distant : comprenez le voyage d'une requête sur Internet."
          creatorInitial="M"
          creatorName="Marc K."
          creatorRole="Développeur"
          views="1,8k"
          likes="96"
          onDiscover={() => onNavigate('challenges')}
        />

        <ChallengePreview
          onStart={() => onNavigate('challenges')}
        />
      </div>
    </section>
  )
}

export default HomePage
