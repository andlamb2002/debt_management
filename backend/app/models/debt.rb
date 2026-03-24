class Debt < ApplicationRecord
    has_many :payments, dependent: :destroy
    belongs_to :organization

    validates :name, presence: true
    validates :principal_amt, presence: true
    validates :status, inclusion: { in: [true, false] }
end
