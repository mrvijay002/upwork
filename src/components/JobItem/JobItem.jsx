import { Link } from 'react-router-dom';
import { SkillTag } from '..';
import './jobitem.scss';

function JobItem() {
  return (
    <div className="job-item tw-py-7 tw-px-4 tw-text-base">
      <Link to={'/description'} className="tw-display-block">
        <h3 class="job-title tw-mb-3 tw-font-semibold	">Critical error to resolved</h3>
        <div className="row tw-flex tw-items-center	tw-mb-3 tw-text-xs">
          <div className="price">Fixed price</div>
          <div className="tw-mx-1">-</div>
          <div>Posted 27 min. ago</div>
        </div>
        <div className="tw-flex tw-flex-wrap tw-mb-3 tw-text-sm">
          <div className="tw-w-1/2 tw-mb-3">
            <div className="tw-font-semibold tw-text-sm">$10</div>
            <div className="job_item__budget-title tw-text-xs tw-mt-0.5">Budget</div>
          </div>
          <div className="tw-w-1/2 tw-mb-3">
            <div className="tw-font-semibold tw-text-sm">Expert</div>
            <div className="job_item__budget-title tw-text-xs tw-mt-0.5">Experience Level</div>
          </div>
        </div>
        <p className="tw-text-sm desc tw-mb-3">
          Website is showing critical error on login page. Looking for you to resolve it asap Private only!
        </p>
        <div>
          <SkillTag />
        </div>
      </Link>
    </div>
  );
}

export default JobItem;
