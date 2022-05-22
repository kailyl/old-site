import './Current.css'

export default function Current() { 
    const ht = <a href="https://css.seas.upenn.edu/project/group-dynamics/" className='link2'>High-Throughput Experiments on Group Dynamics</a>;
    const css = <a href="https://css.seas.upenn.edu/" className='link2'>Penn Computational Social Science Lab</a>;
    return (
        <div className='currentStuff'> 
            <p className='paragraph'> 
                currently working on {ht} @ {css} 
            </p>
            
        </div>
    )
}
