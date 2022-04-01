import styles from "../styles/Proposal.module.css";

const Proposal = ({ description, votes, proposalId }) => {
  return (
    <div className={styles.proposal}>
      <h5 className={styles.description}>{description}</h5>
      <div className={styles.options}>
        {votes.map((vote) => (
          <div key={vote.type}>
            <input
              type="radio"
              id={proposalId + "-" + vote.type}
              name={proposalId}
              value={vote.type}
              defaultChecked={vote.type === 2}
            />
            <label htmlFor={proposalId + "-" + vote.type}>{vote.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Proposal;
