import React, { useEffect, useState } from 'react';
import { HABITICA_CONFIG } from '../../config/habitica';

interface ApiResponse {
  success: boolean;
  data: any;
}

interface EndpointInfo {
  url: string;
  description: string;
}

const ENDPOINTS: Record<string, EndpointInfo> = {
  content: {
    url: `${HABITICA_CONFIG.API_URL}/content`,
    description: 'Fetches game content including equipment, items, and quests'
  },
  user: {
    url: `${HABITICA_CONFIG.API_URL}/user`,
    description: 'Retrieves current user data including stats, inventory, and preferences'
  }
};

export const ApiDebug = () => {
  const [contentData, setContentData] = useState<ApiResponse | null>(null);
  const [userContent, setUserContent] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          'Content-Type': 'application/json',
          'x-api-user': HABITICA_CONFIG.USER_ID,
          'x-api-key': HABITICA_CONFIG.API_TOKEN,
          'x-client': `${HABITICA_CONFIG.USER_ID}-HabiticaClone`
        };

        const contentResponse = await fetch(ENDPOINTS.content.url, {
          headers,
          method: 'GET'
        });
        const contentJson = await contentResponse.json();

        const userResponse = await fetch(ENDPOINTS.user.url, {
          headers,
          method: 'GET'
        });
        const userJson = await userResponse.json();

        setContentData(contentJson);
        setUserContent(userJson);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-4">Loading API data...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  const ApiSection = ({ title, endpoint, data }: { title: string, endpoint: EndpointInfo, data: ApiResponse | null }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="mt-2 text-sm text-gray-600">
          <p><strong>Endpoint:</strong> {endpoint.url}</p>
          <p><strong>Description:</strong> {endpoint.description}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm whitespace-pre-wrap break-words" style={{ maxWidth: '100%' }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <ApiSection 
        title="Content API Response" 
        endpoint={ENDPOINTS.content}
        data={contentData} 
      />
      <ApiSection 
        title="User API Response" 
        endpoint={ENDPOINTS.user}
        data={userContent} 
      />
    </div>
  );
};