import TypeWriterEffect from 'react-typewriter-effect';

export default function Typewriter({strings}: {strings: string[]}) {
    return (
         <TypeWriterEffect
            textStyle={{
                fontSize: "1.25rem",
                fontWeight: "300",
            }}
            startDelay={500}
            cursorColor="#3F3D56"
            multiText={strings}
            multiTextLoop={true}
            multiTextDelay={1000}
            typeSpeed={30}
      />
    )
}