import { FunctionComponent } from 'preact';
import Header from '../../components/Header';
import PlayerList from '../../components/Player/PlayerList';

const PlayersPage: FunctionComponent = () => (
  <div>
    <Header title="Players" />
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <PlayerList />
      </div>
    </div>
  </div>
);

export default PlayersPage;
