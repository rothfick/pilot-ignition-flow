import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface ContactFormNotificationProps {
  name?: string
  email?: string
  message?: string
  submittedAt?: string
}

const ContactFormNotificationEmail = ({
  name,
  email,
  message,
  submittedAt,
}: ContactFormNotificationProps) => (
  <Html lang="pl" dir="ltr">
    <Head />
    <Preview>Nowe zgłoszenie z formularza{name ? ` od ${name}` : ''}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={eyebrow}>FlowPilot AI Lab</Text>
          <Heading style={h1}>Nowe zgłoszenie z formularza</Heading>
        </Section>

        <Section style={card}>
          <Text style={label}>Imię i nazwisko</Text>
          <Text style={value}>{name || '—'}</Text>

          <Hr style={divider} />

          <Text style={label}>E-mail</Text>
          <Text style={value}>{email || '—'}</Text>

          <Hr style={divider} />

          <Text style={label}>Wiadomość</Text>
          <Text style={messageStyle}>{message || '—'}</Text>

          {submittedAt ? (
            <>
              <Hr style={divider} />
              <Text style={label}>Wysłano</Text>
              <Text style={value}>{submittedAt}</Text>
            </>
          ) : null}
        </Section>

        <Text style={footer}>
          Wiadomość wysłana automatycznie z formularza kontaktowego na
          flowpilotlaunch.store
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactFormNotificationEmail,
  subject: (data: Record<string, any>) =>
    data?.name
      ? `Nowe zgłoszenie od ${data.name}`
      : 'Nowe zgłoszenie z formularza',
  displayName: 'Powiadomienie z formularza kontaktowego',
  to: 'robertoo256@icloud.com',
  previewData: {
    name: 'Jan Kowalski',
    email: 'jan@example.com',
    message: 'Cześć, chciałbym porozmawiać o wdrożeniu AI w mojej firmie.',
    submittedAt: new Date().toLocaleString('pl-PL'),
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  margin: 0,
  padding: '40px 20px',
}

const container = {
  maxWidth: '560px',
  margin: '0 auto',
}

const header = {
  textAlign: 'center' as const,
  marginBottom: '32px',
}

const eyebrow = {
  fontSize: '11px',
  letterSpacing: '0.4em',
  textTransform: 'uppercase' as const,
  color: '#999999',
  margin: '0 0 12px',
  fontWeight: 300,
}

const h1 = {
  fontSize: '24px',
  fontWeight: 300,
  letterSpacing: '-0.02em',
  color: '#0a0a0a',
  margin: 0,
}

const card = {
  backgroundColor: '#fafafa',
  border: '1px solid #ececec',
  borderRadius: '12px',
  padding: '28px',
}

const label = {
  fontSize: '11px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  color: '#999999',
  margin: '0 0 6px',
  fontWeight: 500,
}

const value = {
  fontSize: '15px',
  color: '#0a0a0a',
  margin: '0',
  lineHeight: '1.5',
}

const messageStyle = {
  fontSize: '15px',
  color: '#0a0a0a',
  margin: '0',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap' as const,
}

const divider = {
  borderColor: '#ececec',
  margin: '20px 0',
}

const footer = {
  fontSize: '12px',
  color: '#999999',
  textAlign: 'center' as const,
  marginTop: '32px',
  fontWeight: 300,
}