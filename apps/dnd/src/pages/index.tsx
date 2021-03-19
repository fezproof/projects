import { FunctionComponent } from 'preact';
import Header from '../components/Header';

const IndexPage: FunctionComponent = () => (
  <div>
    <Header title="Home" />
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
      </div>
    </div>
  </div>
);

export default IndexPage;
