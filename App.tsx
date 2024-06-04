import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import Container from './Container';
export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Container />
    </GluestackUIProvider>
  );
}

