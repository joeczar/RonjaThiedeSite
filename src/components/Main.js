import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import { useStaticQuery, graphql } from 'gatsby'

const Main = props => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "Lebenslauf_RONJA" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )

  console.log(data)

  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="lebenslauf"
        className={`${props.article === 'lebenslauf' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h1 className="major">Lebenslauf</h1>
        <span className="image main">
          <img src={pic01} alt="" />
        </span>
        <h2 className="major">Berufserfahrung</h2>
        <h3>Radiomoderatorin, Redakteurin, Reporterin</h3>
        <h3>STAR FM - Maximum Rock</h3>
        <h3>01.01.2016 - fortlaufend</h3>
        <ul>
          <li>
            Moderation, Vorbereitung und Umsetzung der DailyShow „Rush Hour“
          </li>
          <li>
            Redaktionelle Arbeit (Interviews führen, Interviewpartner*innen
            finden, Reportagen, Produktion, Recherche, Formatfindung und
            Umsetzung)
          </li>
          <li>
            Eigene Sendungen: „STAR FM Heart Rock Show“ Eigene Rubriken: „Ronjas
            Top 3 des Tages“, „Ronjas Streaming News der Woche“, „Das Interview,
            das es niemals gab“, „Astro-Ronja - Ronja und das Weltall“
          </li>
        </ul>
        <h2 className="major">Ausbildung</h2>
        <h3>Studium DEKRA Hochschule Berlin</h3>
        <p>
          <b>Studiengang:</b> TV-Journalismus
        </p>
        <p>
          <b>Abschluss:</b> Bachelor of Arts
        </p>
        <h2 className="major">Volontariat</h2>
        <h3>STAR FM - Maximum Rock</h3>
        <p>
          Redaktionelle Arbeit, Co-Moderation der Daily-Show „Rush Hour“, sowie
          der STAR FM Morning-Show „TBones Breakfastclub (Sidekick)
        </p>
        <ul>
          {data.allFile.edges.map((file, index) => {
            return (
              <li key={`pdf-${index}`}>
                <a href={file.node.publicURL} download>
                  Download Lebenslauf
                </a>
              </li>
            )
          })}
        </ul>

        {close}
      </article>

      <article
        id="work"
        className={`${props.article === 'work' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Arbeit</h2>
        <span className="image main">
          <img src={pic02} alt="" />
        </span>
        <h3>Reportagen</h3>
        <ul>
          <li>
            How To StartUp - Richtig gründen, richtig scheitern, Richtig
            erfolgreich werden (Serie - unter anderem mit Einhorn Berlin)
          </li>
          <li>Ein Tag mit einem Straßenfeger-Verkäufer</li>
          <li>Go Student - Eine Nachhilfestunde in Fortnite</li>
          <li>Freiwillige Feuerwehr Wartenberg - Ein Ehrenamt stirbt aus?</li>
          <li>Fridays For Future (u.A. mit Scientists for Future)</li>
          <li>Kurz mal aus `nem Flugzeug springen Tandemsprung getestet</li>
        </ul>
        <h3>Interviews</h3>
        <ul>
          <li>
            Bands: Stereophonics, Rival Sons, Highly Suspect, Pixies, Queens of
            the Stone Age u.v.m.
          </li>
          <li>
            Festival im Rollstuhl - Wie geht das? Was können wir besser machen?
            (mit einer Rollstuhl-Fahrerin und ihrem Verein auf dem
            Sziget-Festival)
          </li>

          <li>
            Achtung Asteroid - Sind wir darauf vorbereitet? (mit Professor Alan
            Harris vom Deutschen Zentrum für Luft- und Raumfahrt)
          </li>
          <li>
            Tag der Generationen - „Babyboomer bis Generation X“ (mit einem
            Generationsexperten)
          </li>
          <li>Sabbatjahr - Eine Pause nur für Privilegierte?</li>
        </ul>
        {close}
      </article>

      <article
        id="about"
        className={`${props.article === 'about' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">About</h2>
        <span className="image main">
          <img src={pic03} alt="" />
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
          eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat
          volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam.
          Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero
          et malesuada fames ac ante ipsum primis in faucibus. Cras viverra
          ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.
        </p>
        {close}
      </article>

      <article
        id="contact"
        className={`${props.article === 'contact' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </form>
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/HuntaroSan"
              className="icon fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="icon fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="icon fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/codebushi/gatsby-starter-dimension"
              className="icon fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
        {close}
      </article>
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
