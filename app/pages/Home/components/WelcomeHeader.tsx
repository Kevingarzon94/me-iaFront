import '../styles/Welcome.css'
interface Props {
   text: string
}

export const WelcomeHeader: React.FC<Props> = ({text}) => {
  return (
      <h1 className="text welcome-header text-primary-600 mb-6 text-6xl font-bold text-center">
          {text}
      </h1>
  );
};