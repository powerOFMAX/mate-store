import React from 'react'
import { Header } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'

const mateFacts = [
  {
    title: 'It’s not actually “tea”',
    content:
      'Your typical cup of tea (black, green and white) is made from the Camellia sinensis shrub, whereas yerba mate is made from the leaves of Ilex paraguariensis, an evergreen relative of the holly tree found only in South America. The name “yerba” means “herb” in Spanish while “mate” refers to the hollowed-out gourd the drink is traditionally served in.',
  },
  {
    title: 'It keeps a cowboy on his horse',
    content:
      'Argentinian cowboys, or gauchos, are never far from a warm cup of yerba mate. Consumed the customary way in a gourd through a metal straw, or bombilla, generations of gauchos have hustled cattle from dawn till dusk thanks to a steady supply of mate. In Brazil, the beverage is called a chimarrão and also sipped through metal bomba. The iced version of mate is called terere and is especially popular in Paraguay.',
  },
  {
    title: 'It has almost the caffeine level of coffee',
    content:
      'While caffeine results vary according to how yerba mate is processed, this study claims one small cup (150 ml, about 5 ounces) clocks in at 78 milligrams of caffeine, while the same amount of coffee contains 85 milligrams. What makes yerba mate extra special is it packs a wallop of antioxidants in every cup—far exceeding those found in coffee and even green tea. You also get amino acids, minerals and a bevy of vitamins. But that’s not all: researchers are uncovering a flurry of health advantages with consuming mate including fat loss, increased metabolism, diabetes prevention, heart health and even maintenance of bone mineral density.',
  },
  {
    title: 'It can be more than just a drink',
    content: `“This beverage has been consumed for hundreds of years in South America and has numerous health benefits,” says nutritionist, author and founder of the Academy of Culinary Nutrition, Meghan Telpner. While she says yerba mate is mostly consumed as a drink, she offers these creative ideas to get more mate into your day:
- add loose mate to your grains while they’re cooking
- use chilled mate tea in your smoothies, chia puddings or overnight oats
- sprinkle mate in your homemade, no-bake granola bars
- bake a little mate into muffins and breads
- While Telpher praises yerba mate’s high antioxidant count for overall health, she cautions that it does have controversial associations with cancer. This takes us to point number five below.'`,
  },
  {
    title: ' It also contains polycyclic aromatic hydrocarbons (PAHs)',
    content:
      'Now for the fine print. PAHs are organic compounds also present in foods such as barbecued meats and smoked fish. Health experts advise caution with any food containing PAHs as they are known carcinogens. What’s more, some research suggests drinking yerba mate increases the risk of cancer, especially esophageal cancer. However, the risk appears to stem from drinking a very large amount of yerba mate along with alcohol and tobacco consumption. Conversely, this recent study from the University of Illinois suggests yerba mate actually destroys colon cancer cells.',
  },
]

export const AboutPage = () => {
  return (
    <Layout>
      <section>
        <Header as="h1" textAlign="center">
          5 Surprising Facts about Mate
        </Header>
        <figure>
          <figcaption>
            Originally from{' '}
            <a
              target="_blank"
              href="https://news.yahoo.com/5-surprising-facts-about-yerba-mate-153813734.html"
            >
              Yahoo News
            </a>
          </figcaption>
        </figure>
        <ol>
          {mateFacts.map(({ title, content }) => (
            <li key={title}>
              <h3 className="ui header">{title}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ol>
      </section>

      <style jsx>{`
        figure,
        ol {
          padding: 0;
          margin: 0;
        }
        figure {
          margin: 2rem auto 3rem;
          text-align: center;
        }
        figcaption {
          margin-top: 0.5rem;
          font-site: 0.7rem;
          color: grey;
        }
        ol {
          list-style: none;
          // Look ma! Responsive grid with no Media queries :)
          // https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          grid-gap: 4.5rem 3rem;
          // Look ma! A CSS Counter :)
          // https://moderncss.dev/totally-custom-list-styles/
          counter-reset: orderedlist;
          white-space: pre-wrap;
        }
        li::before {
          counter-increment: orderedlist;
          content: counter(orderedlist);
          // Boring stuff
          position: absolute;
          top: -43px;
          left: -5px;
          color: #cecece;
          font-size: 5rem;
          font-weight: bold;
        }
        li {
          position: relative;
        }
        h3:first-child {
          // why the first-child selector you may ask...
          // to gain specificity and thus avoid using '!important' :)
          padding-left: 40px;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default AboutPage
