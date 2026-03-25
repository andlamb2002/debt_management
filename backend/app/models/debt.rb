class Debt < ApplicationRecord
    has_many :payments, dependent: :destroy
    belongs_to :organization

    validates :name, presence: true
    validates :principal_amt, presence: true
    validates :issue_date, presence: true
    validates :status, inclusion: { in: ["active", "paid"] }

    def total_paid
        payments.sum(:amount)
    end

    def remaining_balance
        principal_amt - total_paid
    end
end
