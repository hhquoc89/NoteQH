import { animated, useSpring } from '@react-spring/web'
function AnimatedText({ children }) {
    const items = Array.from(children);
    const config = { mass: 5, tension: 2000, friction: 200 };
    const props = useSpring({
      from: { opacity: 0, transform: 'translateX(-50px)' },
      to: async (next) => {
        while (true) {
          await next({ opacity: 1, transform: 'translateX(0px)' });
          await next({ opacity: 0.5, transform: 'translateX(50px)' });
          await next({ opacity: 0, transform: 'translateX(100px)' });
          await next({ opacity: 0, transform: 'translateX(-50px)' });
          await next({ opacity: 0.5, transform: 'translateX(0px)' });
          await next({ opacity: 1, transform: 'translateX(0px)' });
        }
      },
      config,
    });
  
    return (
      <div>
        {items.map((item, i) => (
          <animated.span key={i} style={props}>
            {item}
          </animated.span>
        ))}
      </div>
    );
  }
export default AnimatedText;