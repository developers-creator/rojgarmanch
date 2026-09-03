import { unsplash as u } from "@/lib/media";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";

const list = [
  ["1559136555-9303baea8ebd", "आन्तरिक परियोजना पिच गर्दा हुने गल्तीहरू"],
  ["1519389950473-47ba0277781c", "उच्च प्रदर्शन टोलीले कोचिङबाट सिक्ने कुरा"],
] as const;

/** फिचर — blue spotlight card + list below (outside the card) */
export function Feature() {
  return (
    <Reveal className="reveal reveal-delay-1">
      <section
        id="feature"
        className="feature-spot"
        aria-labelledby="feature-title"
      >
        <div className="feature-spot__card">
          <div className="feature-spot__label">
            <span className="feature-spot__rule" aria-hidden="true" />
            <a
              className="feature-spot__badge"
              href="/category/feature"
              id="feature-title"
            >
              फिचर
            </a>
            <span className="feature-spot__rule" aria-hidden="true" />
          </div>

          <article className="feature-spot__hero">
            <img
              className="feature-spot__cover"
              src={u("1506905925346-21bda4d32df4", 900, 700)}
              alt="पहाडी बस्तीको दृश्य"
              width={900}
              height={700}
              loading="lazy"
            />
            <div className="feature-spot__shade" aria-hidden="true" />

            <div className="feature-spot__body">
              <h3 className="feature-spot__headline">
                <a href="#article">
                  मध्य-करियर पेशेवरहरूले दिगो भविष्यको खेल कसरी
                  फेर्दैछन्
                </a>
              </h3>
              <p className="feature-spot__excerpt">
                दृश्यता, प्रायोजन र स्पष्ट जिम्मेवारीले नै अर्को पद खुल्छ —
                प्रबन्धक र अपरेटरहरूसँगको संवाद।
              </p>
              <a className="feature-spot__cta" href="#article">
                पुरा फिचर पढ्नुहोस्
                <Icon name="arrow-right" size={14} />
              </a>
            </div>

            <img
              className="feature-spot__inset"
              src={u("1439066615861-d1af74d74000", 240, 240)}
              alt=""
              width={120}
              height={120}
              loading="lazy"
            />
          </article>
        </div>

        <ul className="feature-spot__list">
          {list.map(([image, title]) => (
            <li key={title}>
              <a className="feature-spot__item" href="#article">
                <span className="feature-spot__thumb">
                  <img
                    src={u(image, 200, 160)}
                    alt=""
                    width={88}
                    height={66}
                    loading="lazy"
                  />
                </span>
                <span className="feature-spot__item-title line-2">{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}
