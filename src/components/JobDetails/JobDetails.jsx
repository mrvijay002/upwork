import './job_details.scss';
import { SkillTag } from '..';

function JobDetails() {
  return (
    <section className="job-details tw-text-sm">
      <div className="job-details__section tw-p-4">
        <h1 className="job-title tw-text-xl tw-mb-6">WordPress developer for error fixing</h1>
        <div className="job-type tw-mb-1">Web Design</div>
        <div className="posted-on tw-text-sm tw-mb-3">Posted 23 minutes ago</div>

        <div className="tw-text-sm tw-mb-2">Send a proposal for: 8 Connects</div>
        <div className="tw-text-sm tw-mb-2">Available Connects: 80</div>
      </div>

      <div className="job-details__section tw-p-4">
        <div>
          <p>
            I run a blogging platform that has a host of simple, clean and minimalist themes. I need more themes built
            for the site. They aren't complex, but need a wide variety.{' '}
          </p>
          <p>
            The platform is a text blog with no JS and everything is done in vanilla simplified CSS. The HTML is already
            defined and just needs to be styled.
          </p>
        </div>
      </div>

      <div className="job-details__section tw-p-4">
        <div className="tw-flex tw-flex-wrap tw-mb-3 tw-text-sm">
          <div className="tw-w-1/2 tw-mb-3">
            <div className="tw-font-semibold tw-text-sm">$10</div>
            <div className="job_item__budget-title tw-text-xs tw-mt-0.5">Budget</div>
          </div>
          <div className="tw-w-1/2 tw-mb-3">
            <div className="tw-font-semibold tw-text-sm">Expert</div>
            <div className="job_item__budget-title tw-text-xs tw-mt-0.5">Experience Level</div>
          </div>
          <div className="tw-w-1/2 tw-mb-3">
            <div className="tw-font-semibold tw-text-sm">Less than 30hrs/week</div>
            <div className="job_item__budget-title tw-text-xs tw-mt-0.5">Hourly</div>
          </div>
        </div>
      </div>

      <div className="job-details__section tw-p-4">
        <h4 className="tw-mb-5 sub-title">Skills and Expertise</h4>
        <div className="tw-flex">
          {[1, 2, 3].map((e) => {
            return (
              <div className="tw-mr-2 tw-mb-2">
                <SkillTag />
              </div>
            );
          })}
        </div>
      </div>

      <div className="job-details__section tw-p-4">
        <h4 className="tw-mb-5 sub-title">Activity on this job</h4>
        <div className="tw-flex tw-justify-between tw-mb-1">
          <div>Proposals</div>
          <div>5 to 10</div>
        </div>

        <div className="tw-flex tw-justify-between tw-mb-1">
          <div>Interviewing</div>
          <div>5</div>
        </div>

        <div className="tw-flex tw-justify-between tw-mb-1">
          <div>Invite sent</div>
          <div>5</div>
        </div>

        <div className="tw-flex tw-justify-between tw-mb-1">
          <div>Unanswered invites</div>
          <div>5</div>
        </div>
      </div>
    </section>
  );
}

export default JobDetails;
