import { process } from '@/lib/content';

export default function Process() {
  return (
    <section className="section section--mist" id="process">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="sh-text">
            <h2 className="feature-heading">{process.heading}</h2>
            <p className="body">{process.copy}</p>
          </div>
        </div>

        <div className="steps">
          {process.steps.map((step, i) => (
            <div className="step reveal" key={step.title}>
              <span className="step-num">{i + 1}</span>
              <h3 className="sub-heading">{step.title}</h3>
              <p className="body">{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
