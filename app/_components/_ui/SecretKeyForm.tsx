'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/ui/Card";
import { Label } from "@/ui/Label";
import { Input } from "@/ui/Input";
import { Button } from "@/ui/Button";
import { toast } from 'sonner';
import Loading from '@/app/loading';


/*
THIS IS THE COMPONENT THAT WILL BE USED TO UPLOAD SECRET KEYS TO THE DATABASE

*/

export default function SecretKeysForm() {
  const [umamiKey, setUmamiKey] = useState('');
  const [beehiivKey, setBeehiivKey] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSecretKeys = async () => {
      try {
        const response = await axios.get('/api/secret-keys');
        const { umamiKey, beehiivKey } = response.data;
        setUmamiKey(umamiKey);
        setBeehiivKey(beehiivKey);
      } catch (error) {
        console.error('Error fetching secret keys:', error);
        toast.error('Error fetching secret keys');
      } finally {
        setLoading(false);
      }
    };

    fetchSecretKeys();
  }, []);

  const updateSecretKeys = async () => {
    try {
      await axios.post('/api/secretKeys', { umamiKey : umamiKey, beehiivKey : beehiivKey });
      toast.success('Secret keys updated successfully');
    } catch (error) {
      console.error('Error updating secret keys:', error.response.data);
      toast.error('Error updating secret keys');
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>API Key Settings</CardTitle>
        <CardDescription>Update your Umami.is and BeeHivv API keys. Leave empty if no key is wanted.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Umami.is API Key</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This key is used to authenticate with the Umami.is analytics platform.
              </p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <Label htmlFor="umami-key">Umami API Key</Label>
            <Input
              id="umami-key"
              value={umamiKey}
              onChange={(e) => setUmamiKey(e.target.value)}
              placeholder="Enter your Umami API key (optional)"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">BeeHivv API Key</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This key is used to authenticate with the BeeHivv marketing platform.
              </p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <Label htmlFor="beehivv-key">BeeHivv API Key</Label>
            <Input
              id="beehivv-key"
              value={beehiivKey}
              onChange={(e) => setBeehiivKey(e.target.value)}
              placeholder="Enter your BeeHivv API key (optional)"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={updateSecretKeys} className="ml-auto">Save Changes</Button>
      </CardFooter>
    </Card>
  );
}
