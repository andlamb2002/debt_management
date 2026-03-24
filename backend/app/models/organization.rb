class Organization < ApplicationRecord
    has_many :debts, dependent: :destroy

    validates :name, presence: true
end
