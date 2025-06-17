import React, { useState } from 'react';
import { Webchat } from '@botpress/webchat';

const configuration = {
  welcomeMessage: 'hello',
  botName: 'Bankbooker',
  avatarUrl: 'https://i.pravatar.cc/150?img=3', // Bot avatar fotoğrafı için URL
  color: '#007bff',
};

export default function BotpressChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 9999,
          padding: '12px 16px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: '#007bff',
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
        }}
        aria-label="Open Chat"
      >
        icon
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: 70,
            right: 20,
            width: 360,
            height: 560,
            zIndex: 9999,
            boxShadow: '0 0 15px rgba(0,0,0,0.3)',
          }}
        >
          <Webchat
            clientId="32ed5e6b-7846-4c56-a4b4-d66d852d066f"
            configuration={configuration}
          />
        </div>
      )}
    </>
  );
}
